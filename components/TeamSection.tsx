import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react'

const TeamSection = () => {
  return (
    <div className="max-w-7xl px-6 mx-auto bg-primary-100 dark:bg-primary-50 flex justify-between items-center rounded-3xl p-10">
      <div className='w-2/3 font-siliguri'>
        <h2 className="mb-5 font-extrabold  text-5xl">
          Join Our Team
        </h2>
        <p>
          Join Learn HQ and help shape the future of education with innovation
          solutions.
        </p>
      </div>
      <div>
        <Link href={""}>
          <Button color="secondary" className='font-siliguri' >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default TeamSection