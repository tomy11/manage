import * as z from "zod";
import { FormEvent, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form'

import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { SignupValidation } from "../../lib/validation";
import { Link } from "react-router-dom";

const SingUp = () => {
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const handleSignup = async (user: z.infer<typeof SignupValidation>) => {

  }

  return (
    <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
          <h1 className="text-center text-lg mb-10 mt-14">Sing Up</h1>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            
          </p>
            <form
              onSubmit={form.handleSubmit(handleSignup)}
              className="flex flex-col gap-5 w-full mt-4">

              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">FirstName</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">LastName</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Email</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Password</FormLabel>
                    <FormControl>
                      <Input type="password" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="bg-[#0BDAA5] rounded-full hover:bg-[#62f3ce]">
                Singup
              </Button>

              <p className="text-small-regular text-light-2 text-center mt-2">Already have an account?
                <Link
                  to="/singin"
                  className="text-green-500 text-end text-small-semibold ml-1">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </Form>
  )
}

export default SingUp