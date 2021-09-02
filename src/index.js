const { exec } = require("child_process");

const encodeVideo = (id, video, uri) => {
  exec(
    `cd encryptedVideos && cd ${id} && openssl rand 16 > ${id}.key && echo ${uri} > ${id}.keyinfo && echo ${id}.key >> ${id}.keyinfo && ffmpeg -y -i ${video} -hls_time 9 -hls_key_info_file ${id}.keyinfo -hls_playlist_type vod -hls_segment_filename "fileSequence%d.ts" prog_index.m3u8`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log("key created");
      }
    }
  );
};

// encodeVideo();

module.exports = encodeVideo;
