"use client";

import { CreateFormSchema, CreateFormSchemaType } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreateForm } from "@/actions/form";
import { ImSpinner2 } from "react-icons/im";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  DialogDescription,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Dialog,
} from "@/components/ui/dialog";
import {
  FormMessage,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  Form,
} from "@/components/ui/form";

export const CreateFormBtn = () => {
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();

  const form = useForm<CreateFormSchemaType>({
    resolver: zodResolver(CreateFormSchema),
  });

  const onSubmit = async (values: CreateFormSchemaType) => {
    try {
      const formId = await CreateForm(values);
      toast({
        title: "Success",
        description: "Form created successfully",
      });
      setOpen(() => false);
      router.push(`/builder/${formId}`);
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later!",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group border border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4 rounded-md"
        >
          <BsFileEarmarkPlus className="h-7 w-7 text-muted-foreground group-hover:text-primary" />
          <p className="font-bold text-md text-muted-foreground group-hover:text-primary">
            Create new form
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="mt-4"
              >
                {!form.formState.isSubmitting ? (
                  "Save"
                ) : (
                  <ImSpinner2 className="animate-spin" />
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
