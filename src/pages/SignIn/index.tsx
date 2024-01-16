import * as z from "zod";
import axios from 'axios';
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
import { SigninValidation } from '../../lib/validation';
import { Link, useNavigate } from "react-router-dom";
import { useAuth, AuthContextData } from "../../hooks/auth";
//import signIn from "../../services/AuthSrevice"



const SignIn = () => {
    const navigate = useNavigate();
    const { signIn } = useAuth();
    const form = useForm<z.infer<typeof SigninValidation>>({
        resolver: zodResolver(SigninValidation),
        defaultValues: {
          email: "",
          password: "",
        },
    });

    const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
      console.log('user ', user);
      try {
        await signIn(user);
        console.log('login success');
        navigate('/dashboard');
        
      } catch (error) {
        console.log('error ', error);
      }
    }

    return (
        <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
          <h1 className="text-center text-balance mt-14 mb-10"></h1>
          <h2 className="text-center text-lg mb-10">
            Welcome Back!
          </h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            Sign in to your account to continue.
          </p>
            <form
              onSubmit={form.handleSubmit(handleSignin)}
              className="flex flex-col gap-5 w-full mt-4">
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
                Sign In
              </Button>

              <p className="text-small-regular text-light-2 text-start mt-2">Don&apos;t have an account?  
              <Link
                  to="/singup"
                  className="text-green-500 text-end text-small-semibold ml-1">
                  Sign up
              </Link></p>
            
            </form>
          </div>
        </Form>
    )
}

export default SignIn;