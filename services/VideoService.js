const fs = require('fs');

const rawData = fs.readFileSync(require.resolve('./videos.json'));
const videosData = JSON.parse(rawData);

class VideoService{
  static byStrictEquality(field, value) {
    return videosData.filter(video => video[field] === value);
  }

  static byPartialMatch(field, keyword) {
    return videosData.filter(video => video[field].toLowerCase().includes(keyword.toLowerCase()));
  }

  static byDurationRange(minDuration, maxDuration) {
    return videosData.filter(video => video.duration >= minDuration && video.duration <= maxDuration);
  }

  static byTags(tags) {
    return videosData.filter(video => video.tags.some(tag => tags.includes(tag)));
  }
}
  
module.exports = VideoService;