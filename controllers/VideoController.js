const VideoService = require('../services/VideoService');

class VideoController {

  constructor() {
  }

  static byStrictEquality(req, res) {
    try {
      const {field, value} = req.body;
      if (!field || !value) return res.status(400).send('very bad request');
      const filteredData = VideoService.byStrictEquality(field, value);
      res.status(200).json(filteredData);      
    } catch (error) {
      console.error(error);
      res.status(500).send('internal server error');
    }
  }


  static byPartialMatch(req, res) {
    try {
      const {field, value} = req.body;
      if (!field || !value) return res.status(400).send('very bad request');
      const filteredData = VideoService.byPartialMatch(field, value);
      res.status(200).json(filteredData);      
    } catch (error) {
      console.error(error);
      res.status(500).send('internal server error');
    }
  }

  static byDurationRange(req, res) {
    try {
      const minDuration = parseInt(req.body.minDuration);
      const maxDuration = parseInt(req.body.maxDuration);
      if (!minDuration || !maxDuration) return res.status(400).send('very bad request');
      const filteredData = VideoService.byDurationRange(minDuration, maxDuration);
      res.status(200).json(filteredData);      
    } catch (error) {
      console.error(error);
      res.status(500).send('internal server error');
    }
  }

  static byTags(req, res) {
    try {
      const tags = req.body.tags.split(',');
      const filteredData = VideoService.byTags(tags);
      res.status(200).json(filteredData);      
    } catch (error) {
      console.error(error);
      res.status(500).send('internal server error');
    }
  }
}

module.exports = VideoController;