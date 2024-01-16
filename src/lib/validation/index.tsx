import * as z from "zod";

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export const SignupValidation = z.object({
    firstName: z.string().min(2, { message: "FirstName must be at least 2 characters." }),
    lastName: z.string().min(2, { message: "LastName must be at least 2 characters." }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});