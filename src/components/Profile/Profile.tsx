import Image from 'next/image';

import { Site } from '@/types';

type ProfileProps = {
  items: Site;
};

export const Profile = ({ items }: ProfileProps) => {
  return (
    <div>
      <Image
        src="/assets/images/profile.jpeg"
        alt="profile image"
        width={80}
        height={80}
        title="profile image"
        priority
        className="rounded-full"
      />

      <h1 className="my-3 text-4xl font-bold">{items.title}</h1>
      <p className="text-md">{items.subtitle}</p>
    </div>
  );
};
