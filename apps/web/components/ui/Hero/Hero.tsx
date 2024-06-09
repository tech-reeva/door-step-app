import Image from 'next/image';
import Link from 'next/link';
import { SfButton } from '@storefront-ui/react';
import type { HeroProps } from '~/components';
import { useState } from 'react';

export function Hero({
  image,
  subtitle,
  title,
  description,
  primaryButtonLink,
  primaryButtonText,
  secondaryButtonLink,
  secondaryButtonText,
  ...attributes
}: HeroProps) {
  const [selectedService, setSelectedService] = useState(""); 

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };
  return (
    <div className="relative min-h-[600px] mb-10" {...attributes}>
      <div className="md:flex md:flex-row-reverse md:justify-center min-h-[600px] max-w-screen-3xl mx-auto">
        <div className="flex flex-col justify-center md:basis-2/4 md:items-stretch md:overflow-hidden">
          <Image
            src="/images/banner.png"
            alt="Hero"
            className="h-auto w-full object-cover object-left"
            height={600}
            width={764}
            priority
          />
        </div>
        <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
            Door Steps
          </p>
          <h1 className="typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4">
          Bringing Services to Your Doorstep
          </h1>
          <p className="typography-text-base md:typography-text-lg">Find reliable professionals ready to tackle any job, making home management effortless and stress-free. </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
          <select value={selectedService} onChange={handleServiceChange} className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select a service you are looking for</option>
              <option value="plumber">Plumber</option>
              <option value="electrician">Electrician</option>
              <option value="cleaner">Cleaner</option>
              <option value="helper">Helper</option>
              <option value="beautician">Beautician</option>
              <option value="baby-caretaker">Baby Caretaker</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
