# Demo Video

Place your demo video file here as `aura-demo.mp4`.

## Requirements

- **Filename:** `aura-demo.mp4` (must be exactly this name)
- **Format:** MP4 with H.264 video and AAC audio
- **Resolution:** 1920x1080 or 1280x720 recommended
- **Size:** Below 50 MB recommended

## How it works

1. Export your final demo as an H.264 MP4
2. Name it exactly `aura-demo.mp4`
3. Place it in this directory (`public/demo/aura-demo.mp4`)
4. Run `npm run dev` to confirm the video appears on the landing page
5. Commit and push:
   ```bash
   git add public/demo/aura-demo.mp4
   git commit -m "content: add AURA product demo"
   git push origin main
   ```
6. Vercel will automatically redeploy
7. Verify the production video

No application code changes are required. The landing page automatically detects the file.

## If the video is too large for GitHub

- Upload to a public video host (YouTube, Vimeo, etc.)
- Set `NEXT_PUBLIC_DEMO_VIDEO_URL` to the public video page URL
- Redeploy Vercel
