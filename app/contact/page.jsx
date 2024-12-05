"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+213) 699 377 460",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "samyfiras.dev@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "23000, Annaba, Algeria",
  },
];

import React from "react";
import { useForm } from "@formspree/react";

import { motion } from "framer-motion";

function Contact() {
  const [state, handleSubmit] = useForm("meoqvzdz");
  if (state.succeeded) {
    return (
      <p className="text-accent flex justify-center items-center">
        Thank you! Your message has been sent successfully. We will get back to
        you shortly.
      </p>
    );
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form
              action="https://formspree.io/f/meoqvzdz"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#383e5f] rounded-xl"
            >
              <h3 className=" text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Get in touch to discuss your next project!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="name" placeholder="Firstname" />
                <Input type="lastname" name="last" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Address" />
                <Input type="number" name="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                name="message"
              />
              {/* btn */}
              <Button
                type="submit"
                disabled={state.submitting}
                className="max-w-40"
              >
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#383e5f] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
