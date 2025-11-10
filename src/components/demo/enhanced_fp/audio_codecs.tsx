import Code from "../../Code";
import Output from "../../Output";

const AudioCodecsDemo = () => {
  return (
    <div>
      <Code
        snippet={`
() => {
  const audio = document.createElement("audio");
  let codecs = null;

  if (audio.canPlayType) {
    codecs = JSON.stringify({
      ogg: audio.canPlayType('audio/ogg; codecs="vorbis"'),
      mp3: audio.canPlayType("audio/mpeg;"),
      wav: audio.canPlayType('audio/wav; codecs="1"'),
      m4a: audio.canPlayType("audio/x-m4a;"),
      aac: audio.canPlayType("audio/aac;"),
    });
  }

  return codecs;
}
        `.trim()}
      />

      <Output
        generator={() => {
          const audio = document.createElement("audio");
          let codecs = null;

          if (audio.canPlayType) {
            codecs = JSON.stringify({
              ogg: audio.canPlayType('audio/ogg; codecs="vorbis"'),
              mp3: audio.canPlayType("audio/mpeg;"),
              wav: audio.canPlayType('audio/wav; codecs="1"'),
              m4a: audio.canPlayType("audio/x-m4a;"),
              aac: audio.canPlayType("audio/aac;"),
            });
          }

          return codecs;
        }}
      />
    </div>
  );
};

export default AudioCodecsDemo;
