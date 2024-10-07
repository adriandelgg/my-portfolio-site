import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export const Intro = () => {
  return (
    <section>
      <div className="flex items-center gap-x-3">
        {/* Profile */}
        <div className="shrink-0">
          <img className="size-16 shrink-0 rounded-full" src="/adrian.png" alt="Avatar" />
        </div>

        <div className="grow">
          <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
            Adrian Delgado
          </h1>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            {"<"}Software Engineer {"/>"}
          </p>
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
            <FaLinkedinIn />
            <a
              className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              Adrian Delgado
            </a>
          </li>
          <li className="flex items-center gap-x-2.5">
            <FiGithub />
            <a
              className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              @adriandelgg
            </a>
          </li>
          <li className="flex items-center gap-x-2.5">
            <MdOutlineEmail />
            <a
              className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
              href={`mailto:${EMAIL_URL}`}
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
