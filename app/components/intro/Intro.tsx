import { EMAIL_URL } from "@/app/lib/constants";

export const Intro = () => {
  return (
    <section>
      <div className="flex items-center gap-x-3">
        {/* Profile */}
        <div className="shrink-0">
          <img
            className="size-16 shrink-0 rounded-full"
            src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar"
          />
        </div>

        <div className="grow">
          <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
            Adrian Delgado
          </h1>
          <p className="text-sm text-gray-600 dark:text-neutral-400">Software Engineer</p>
        </div>
      </div>
      {/*End Profile*/}

      {/*About */}
      <div className="mt-8">
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          I am a seasoned graphic designer with over 14 years of experience in creating
          visually appealing and user-centric designs. My expertise spans across UI
          design, design systems, and custom illustrations, helping clients bring their
          digital visions to life.
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
          Currently, I work remotely for Notion, where I design template UIs, convert them
          into HTML and CSS, and provide comprehensive support to our users. I am
          passionate about crafting elegant and functional designs that enhance user
          experiences.
        </p>

        <ul className="mt-5 flex flex-col gap-y-3">
          <li className="flex items-center gap-x-2.5">
            <svg
              className="size-3.5 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a
              className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
              href="#"
            >
              {EMAIL_URL}
            </a>
          </li>
        </ul>
        {/* End About */}
      </div>
    </section>
  );
};
