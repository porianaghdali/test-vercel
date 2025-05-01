export default function VideoStreamer({ file,poster='/images/landings/videoPlaceHolder.jpg' }: { file: string;poster?:string }) {
    return (
      <div className="w-full mx-auto">
        <video
          className="w-full rounded-lg shadow"
          controls
          poster={poster}
        >
          {/* <source src={`/api/stream/${encodeURIComponent(file)}`} type="video/mp4" /> */}
          <source src={`/videos/${file}`} type="video/mp4" />
          مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
        </video>
      </div>
    );
  }
  