"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { useAuth, useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import UiNoLogin from "@/app/(portofolio)/contact/_components/ui-no-login";
import SpinnerLoading from "@/components/spinner-loader";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

function FormComponents() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { getToken } = useAuth();
  const [isloading, setIsLoading] = useState<boolean>(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: user?.emailAddresses[0]?.emailAddress,
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>, e: any) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const send = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await getToken()}`,
        },
        body: JSON.stringify(values),
      });
      form.reset({
        username: "",
        email: user?.emailAddresses[0]?.emailAddress,
        message: "",
      });
      setIsLoading(false);

      if (!send.ok) {
        throw new Error(send.statusText);
      }

      toast.success("Pesan Terkirim!");
    } catch (error) {
      toast.error("Gagal megirim Pesan!");
    }
  }

  if (!isLoaded) {
    return <div className="text-center text-3xl">Loading..</div>;
  }

  if (!isSignedIn) {
    return <UiNoLogin />;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          defaultValue={user?.emailAddresses[0]?.emailAddress}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="type your message"
                  className="resize-none h-72"
                  {...field}
                />
              </FormControl>
              <FormDescription>Min 10 characters!</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isloading}
          className="w-full"
          type="submit"
        >
          {isloading ? <SpinnerLoading /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default dynamic(() => Promise.resolve(FormComponents), { ssr: false });
