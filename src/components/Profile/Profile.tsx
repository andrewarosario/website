import Image from 'next/image';

import { socialLinkConfig } from '@/config';
import { Site } from '@/types';

import { SocialMedia } from '../SocialMedia';

type ProfileProps = {
  items: Site;
};

export const Profile = ({ items }: ProfileProps) => {
  return (
    <div className="mb-16 mt-10 flex flex-col-reverse items-center justify-center gap-7 sm:mt-14 md:flex-row md:gap-20">
      <div>
        <h1 className="my-3 text-4xl font-bold">
          Olá, eu sou o Andrew Rosário
        </h1>
        <p className="text-md text-gray-400">{items.subtitle}</p>
        <div className="mt-6">
          <SocialMedia items={socialLinkConfig.mainNav} />
        </div>
      </div>
      <Image
        src="/assets/images/profile.jpeg"
        alt="profile image"
        width={260}
        height={260}
        title="profile image"
        priority
        className="rounded-full"
      />
    </div>
  );
};
