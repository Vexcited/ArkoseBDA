import { md5hex } from "../../../impl/utils";
import Code from "../../Code";
import Output from "../../Output";

const AudioCodecsExtendedHashDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const AUDIO_EXTRA_CODECS = [
    'audio/mp4; codecs="mp4a.40"',
    'audio/mp4; codecs="mp4a.40.1"',
    'audio/mp4; codecs="mp4a.40.2"',
    'audio/mp4; codecs="mp4a.40.3"',
    'audio/mp4; codecs="mp4a.40.4"',
    'audio/mp4; codecs="mp4a.40.5"',
    'audio/mp4; codecs="mp4a.40.6"',
    'audio/mp4; codecs="mp4a.40.7"',
    'audio/mp4; codecs="mp4a.40.8"',
    'audio/mp4; codecs="mp4a.40.9"',
    'audio/mp4; codecs="mp4a.40.12"',
    'audio/mp4; codecs="mp4a.40.13"',
    'audio/mp4; codecs="mp4a.40.14"',
    'audio/mp4; codecs="mp4a.40.15"',
    'audio/mp4; codecs="mp4a.40.16"',
    'audio/mp4; codecs="mp4a.40.17"',
    'audio/mp4; codecs="mp4a.40.19"',
    'audio/mp4; codecs="mp4a.40.20"',
    'audio/mp4; codecs="mp4a.40.21"',
    'audio/mp4; codecs="mp4a.40.22"',
    'audio/mp4; codecs="mp4a.40.23"',
    'audio/mp4; codecs="mp4a.40.24"',
    'audio/mp4; codecs="mp4a.40.25"',
    'audio/mp4; codecs="mp4a.40.26"',
    'audio/mp4; codecs="mp4a.40.27"',
    'audio/mp4; codecs="mp4a.40.28"',
    'audio/mp4; codecs="mp4a.40.29"',
    'audio/mp4; codecs="mp4a.40.32"',
    'audio/mp4; codecs="mp4a.40.33"',
    'audio/mp4; codecs="mp4a.40.34"',
    'audio/mp4; codecs="mp4a.40.35"',
    'audio/mp4; codecs="mp4a.40.36"',
    'audio/mp4; codecs="mp4a.66"',
    'audio/mp4; codecs="mp4a.67"',
    'audio/mp4; codecs="mp4a.68"',
    'audio/mp4; codecs="mp4a.69"',
    'audio/mp4; codecs="mp4a.6B"',
    'audio/mp4; codecs="mp3"',
    'audio/mp4; codecs="flac"',
    'audio/mp4; codecs="bogus"',
    'audio/mp4; codecs="aac"',
    'audio/mp4; codecs="ac3"',
    'audio/mp4; codecs="A52"',
    'audio/mpeg; codecs="mp3"',
    'audio/wav; codecs="0"',
    'audio/wav; codecs="2"',
    'audio/wave; codecs="0"',
    'audio/wave; codecs="1"',
    'audio/wave; codecs="2"',
    'audio/x-wav; codecs="0"',
    'audio/x-wav; codecs="1"',
    'audio/x-wav; codecs="2"',
    'audio/x-pn-wav; codecs="0"',
    'audio/x-pn-wav; codecs="1"',
    'audio/x-pn-wav; codecs="2"',
  ];

  const audio = document.createElement("audio");
  const codecs = {};

  AUDIO_EXTRA_CODECS.forEach((codec) => {
    let canPlay = null;
    let mediaSource = null;

    if (audio.canPlayType) canPlay = audio.canPlayType(codec);

    if (window.MediaSource && window.MediaSource.isTypeSupported)
      mediaSource = window.MediaSource.isTypeSupported(codec);

    codecs[codec] = {
      canPlay: canPlay,
      mediaSource: mediaSource,
    };
  });

  return md5hex(JSON.stringify(codecs));
}
        `.trim()}
      />

      <Output
        generator={() => {
          const AUDIO_EXTRA_CODECS = [
            'audio/mp4; codecs="mp4a.40"',
            'audio/mp4; codecs="mp4a.40.1"',
            'audio/mp4; codecs="mp4a.40.2"',
            'audio/mp4; codecs="mp4a.40.3"',
            'audio/mp4; codecs="mp4a.40.4"',
            'audio/mp4; codecs="mp4a.40.5"',
            'audio/mp4; codecs="mp4a.40.6"',
            'audio/mp4; codecs="mp4a.40.7"',
            'audio/mp4; codecs="mp4a.40.8"',
            'audio/mp4; codecs="mp4a.40.9"',
            'audio/mp4; codecs="mp4a.40.12"',
            'audio/mp4; codecs="mp4a.40.13"',
            'audio/mp4; codecs="mp4a.40.14"',
            'audio/mp4; codecs="mp4a.40.15"',
            'audio/mp4; codecs="mp4a.40.16"',
            'audio/mp4; codecs="mp4a.40.17"',
            'audio/mp4; codecs="mp4a.40.19"',
            'audio/mp4; codecs="mp4a.40.20"',
            'audio/mp4; codecs="mp4a.40.21"',
            'audio/mp4; codecs="mp4a.40.22"',
            'audio/mp4; codecs="mp4a.40.23"',
            'audio/mp4; codecs="mp4a.40.24"',
            'audio/mp4; codecs="mp4a.40.25"',
            'audio/mp4; codecs="mp4a.40.26"',
            'audio/mp4; codecs="mp4a.40.27"',
            'audio/mp4; codecs="mp4a.40.28"',
            'audio/mp4; codecs="mp4a.40.29"',
            'audio/mp4; codecs="mp4a.40.32"',
            'audio/mp4; codecs="mp4a.40.33"',
            'audio/mp4; codecs="mp4a.40.34"',
            'audio/mp4; codecs="mp4a.40.35"',
            'audio/mp4; codecs="mp4a.40.36"',
            'audio/mp4; codecs="mp4a.66"',
            'audio/mp4; codecs="mp4a.67"',
            'audio/mp4; codecs="mp4a.68"',
            'audio/mp4; codecs="mp4a.69"',
            'audio/mp4; codecs="mp4a.6B"',
            'audio/mp4; codecs="mp3"',
            'audio/mp4; codecs="flac"',
            'audio/mp4; codecs="bogus"',
            'audio/mp4; codecs="aac"',
            'audio/mp4; codecs="ac3"',
            'audio/mp4; codecs="A52"',
            'audio/mpeg; codecs="mp3"',
            'audio/wav; codecs="0"',
            'audio/wav; codecs="2"',
            'audio/wave; codecs="0"',
            'audio/wave; codecs="1"',
            'audio/wave; codecs="2"',
            'audio/x-wav; codecs="0"',
            'audio/x-wav; codecs="1"',
            'audio/x-wav; codecs="2"',
            'audio/x-pn-wav; codecs="0"',
            'audio/x-pn-wav; codecs="1"',
            'audio/x-pn-wav; codecs="2"',
          ];

          const audio = document.createElement("audio");
          const codecs = {};

          AUDIO_EXTRA_CODECS.forEach((codec) => {
            let canPlay = null;
            let mediaSource = null;

            if (audio.canPlayType) canPlay = audio.canPlayType(codec);

            if (window.MediaSource && window.MediaSource.isTypeSupported)
              mediaSource = window.MediaSource.isTypeSupported(codec);

            // @ts-expect-error
            codecs[codec] = {
              canPlay: canPlay,
              mediaSource: mediaSource,
            };
          });

          return md5hex(JSON.stringify(codecs));
        }}
      />
    </div>
  );
};

export default AudioCodecsExtendedHashDemo;
