import { Skeleton } from "@/components/ui/skeleton";
import { BiRightArrowAlt } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaWpforms } from "react-icons/fa";
import { GetForms } from "@/actions/form";
import { formatDistance } from "date-fns";
import { LuView } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";
import { Form } from "@prisma/client";
import {
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";

import Link from "next/link";

export const FormCardSkeleton = () => (
  <Skeleton className="border-2 border-primary/20 h-[190px]" />
);

export const FormCard = (form: Form) => {
  const { id, name, published, visits, submissions, description } = form;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center gap-2">
          <span className="truncate font-bold">{name}</span>
          {published && <Badge>Published</Badge>}
          {!published && (
            <Badge className="rounded" variant="destructive">
              Draft
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
          {formatDistance(form.createdAt, new Date(), { addSuffix: true })}
          {!published && (
            <span className="flex items-center gap-2">
              <LuView />
              <span>{visits.toLocaleString()}</span>
              <FaWpforms className="text-muted-foreground" />
              <span>{submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {description || "No description"}
      </CardContent>
      <CardFooter>
        {published && (
          <Button asChild className="w-full mt-2 text-base gap-4">
            <Link href={`/forms/${id}`}>
              View submissions
              <BiRightArrowAlt />
            </Link>
          </Button>
        )}
        {!published && (
          <Button asChild className="w-full mt-2 text-base gap-4">
            <Link href={`/builder/${id}`}>
              Edit form
              <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export const FormCards = async () => {
  const forms: Form[] = await GetForms();

  return (
    <>
      {forms.map((item) => (
        <FormCard key={item.id} {...item} />
      ))}
    </>
  );
};
