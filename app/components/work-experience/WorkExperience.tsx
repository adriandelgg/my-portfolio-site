import { RxCodesandboxLogo } from "react-icons/rx";

export const WorkExperience = () => {
  return (
    <section>
      <h2 className="text-2xl dark:text-white">Work Experience</h2>
      {/* Item */}
      <div className="group relative flex gap-x-5">
        {/* Icon */}
        <div className="relative after:absolute after:bottom-2 after:start-3 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
          <div className="relative z-10 flex size-6 items-center justify-center">
            <img src="/bpLogo.svg" alt="" />
          </div>
        </div>
        {/* End Icon */}

        {/* Right Content */}
        <div className="grow pb-8 group-last:pb-0">
          <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
            Aug 2021 - Present
          </h3>

          <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Full-Stack Software Engineer & Blockchain Developer @ bp
          </p>

          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400"></p>

          <ul className="ms-6 mt-3 list-disc space-y-1.5">
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Led the development of Foresight, an AI-powered knowledge exploration
              platform forked from MIT that analyzes full-text content to identify and
              highlight conceptual overlaps across diverse elements. Uses{" "}
              <strong>OpenAI</strong>, <strong>Python</strong>, <strong>FastAPI</strong>,{" "}
              <strong>Docker</strong>, <strong>PostgreSQL</strong>, <strong>Azure</strong>
              , and <strong>React</strong>.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Led the development and architectural design of an enterprise-grade
              blockchain wallet using React, Node.js, Express, TypeScript, and MongoDB,
              projected at a $21+ million product value for white- label distribution to
              corporations.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Independently managed Azure infrastructure, implementing cost optimization
              strategies and reduced annual costs by $46k. Oversaw deployment,
              configuration, and CI/CD processes to streamline operations and enhance
              efficiency.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Designed and implemented scalable APIs using an event-driven architecture
              for real-time blockchain data synchronization with off-chain databases,
              ensuring cross-platform data consistency and enhancing analytical accuracy.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Developed and deployed an internal quadratic voting app using React,
              Node.js, MongoDB, and Solidity to enhance democratic decision-making for
              critical management matters.
            </li>
          </ul>
        </div>
        {/* End Right Content */}
      </div>
      {/* End Item */}

      <div className="group relative flex gap-x-5">
        <div className="relative after:absolute after:bottom-2 after:start-3 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
          <div className="relative z-10 flex size-6 items-center justify-center">
            {/*  SVG/image */}
          </div>
        </div>

        <div className="grow pb-8 group-last:pb-0">
          <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
            Jan 2021 - Aug 2021
          </h3>

          <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Full-Stack Software Engineer @ SwagCheck, Inc.
          </p>

          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400"></p>

          <ul className="ms-6 mt-3 list-disc space-y-1.5">
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Engineered the company’s core infrastructure, including the website’s UI,
              backend logistical services, and NFT smart contracts using React, Node.js,
              MongoDB, and Solidity.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Developed APIs using Node.js and MongoDB to facilitate the flow of customer
              orders to internal employees resulting in a 55% reduction in processing
              times.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Linked tangible assets with blockchain tech using React, Node.js, MongoDB,
              and Solidity, enabling advanced asset tokenization, management, and
              generating 8% income on resales through royalties.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Utilized ERC1155 standards using Solidity to mint NFTs linked to real-world
              items, enhancing the tokenization of tangible assets.
            </li>
          </ul>
        </div>
      </div>

      <div className="group relative flex gap-x-5">
        <div className="relative after:absolute after:bottom-2 after:start-3 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
          <div className="relative z-10 flex size-7 items-center justify-center">
            <RxCodesandboxLogo />
          </div>
        </div>

        <div className="grow pb-8 group-last:pb-0">
          <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
            Jul 2018 - Aug 2021
          </h3>

          <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Full-Stack Software Engineer @ CodeOnBlocks
          </p>

          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            Work in Slack is one of the beautiful experience I can do in my entire life.
            There are a lot of interesting thing to learn and manager respect your time
            and your personality.
          </p>

          <ul className="ms-6 mt-3 list-disc space-y-1.5">
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Created NFT collections tailored for clients, developing a dedicated website
              that enables minting and seamlessly integrated multiple wallets for secure
              payment processing during mint transactions.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Developed RESTful APIs for a healthcare analytics platform using Node.js and
              MongoDB, enabling real-time data processing and insightful analytics for a
              healthcare provider client.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Developed smart contracts for tokenized assets and NFTs, integrating them
              into a React frontend to create a unique digital art marketplace for artists
              and collectors.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Engineered a blockchain-based voting system using Solidity and TypeScript,
              delivering a secure and transparent platform for casting and tallying votes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
