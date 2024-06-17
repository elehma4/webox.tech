"use client";
import React from "react";
import { BackgroundBeams } from "./BackgroundBeams";
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';

export function ContactSection() {
  return (
    <Container className="relative mt-24 sm:mt-32 lg:mt-40 max-sm:mx-1">
      <FadeIn className="-mx-6 relative z-10 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12 ">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your business
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Contact us
              </Button>
            </div>
          </div>
        </div>
        <BackgroundBeams className="absolute inset-0 -z-10" />
      </FadeIn>
    </Container>
  );
}