import React from "react";
import { AspectRatio } from "@chakra-ui/layout";
import { useMatch } from "react-location";

export default function VideoPage(): JSX.Element {
  const { videoId } = useMatch().params;
  return (
    <>
      <div>Video id is: {videoId}</div>
      <AspectRatio minW="400px" maxW="560px" ratio={1}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
    </>
  );
}
