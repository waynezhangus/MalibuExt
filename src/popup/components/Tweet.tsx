import * as React from 'react';
import TimeAgo from 'react-timeago';
import {
  ChatIcon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline';

export default function Tweet({ tweet }) {
  return (
    <div className="flex space-x-3 border-y border-gray-100 p-3 relative">
      <img
        className="h-10 w-10 mt-1 rounded-full object-cover"
        src={tweet.profileImg}
        alt=""
      />
      <a className="absolute top-[56px] left-[17.5px] w-[5px] h-[calc(100%_-_38px)] border-x-2 border-transparent border-solid bg-gray-300 bg-clip-padding hover:bg-gray-500"></a>

      <div>
        <div className="flex items-center space-x-1">
          <p className="mr-1 text-sm font-bold">{tweet.username}</p>
          <a
            className="text-sm text-gray-500"
            href={tweet.userURL}
            target="_blank"
          >
            @{tweet.screenName} ·
          </a>
          <TimeAgo className="text-sm text-gray-500" date={tweet.updatedAt} />
        </div>

        <p className="pt-1 leading-tight text-sm">{tweet.text}</p>
        {tweet.image && (
          <img
            className="m-3 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            src={tweet.image}
            alt=""
          />
        )}

        {/* Nested Component */}
        <div className="flex mt-2 space-x-3 relative">
          <img
            className="h-10 w-10 mt-1 rounded-full object-cover shrink-0"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnOxT_VY4qgUwe-gqolCg5LHVW-jkp-3snS5PdZGH0zPEjAEm4"
            alt=""
          />
          <a className="absolute top-[45px] left-[6px] w-[5px] h-[calc(100%_-_30px)] border-x-2 border-transparent border-solid bg-gray-300 bg-clip-padding hover:bg-gray-500"></a>

          <div>
            <div className="flex items-center space-x-1">
              <p className="mr-1 text-sm font-bold">Dr. Anthony Fauci</p>
              <a
                className="text-sm text-gray-500"
                href="https://twitter.com/NIAIDNews"
                target="_blank"
              >
                @NIAIDNews ·
              </a>
              <TimeAgo
                className="text-sm text-gray-500"
                date={tweet.updatedAt}
              />
            </div>

            <p className="pt-1 leading-tight text-sm">
              Clearly, in South Africa, Omicron has a transmission advantage.
            </p>

            {/* Nested Component */}
          </div>
        </div>

        {/* Nested Component */}
        <div className="flex mt-2 space-x-3 relative">
          <img
            className="h-10 w-10 mt-1 rounded-full object-cover shrink-0"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnOxT_VY4qgUwe-gqolCg5LHVW-jkp-3snS5PdZGH0zPEjAEm4"
            alt=""
          />
          <a className="absolute top-[45px] left-[6px] w-[5px] h-[calc(100%_-_45px)] border-x-2 border-transparent border-solid bg-gray-300 bg-clip-padding hover:bg-gray-500"></a>

          <div>
            <div className="flex items-center space-x-1">
              <p className="mr-1 text-sm font-bold">Dr. Anthony Fauci</p>
              <a
                className="text-sm text-gray-500"
                href="https://twitter.com/NIAIDNews"
                target="_blank"
              >
                @NIAIDNews ·
              </a>
              <TimeAgo
                className="text-sm text-gray-500"
                date={tweet.updatedAt}
              />
            </div>

            <p className="pt-1 leading-tight text-sm">
              Although it’s too early to make any definitive statements about
              it, thus far it does not look like there’s a great degree of
              severity to it.
            </p>

            {/* Nested Component */}
          </div>
        </div>

        <div className="mt-3 flex justify-between">
          <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
            <ChatIcon className="h-5 w-5" />
            <p>5</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
            <SwitchHorizontalIcon className="h-5 w-5" />
          </div>
          <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
            <HeartIcon className="h-5 w-5" />
          </div>
          <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
            <UploadIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
