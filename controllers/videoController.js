import routes from "../routes";
import Video from "../models/Video"

// render 첫 번째 인자 : templates
// render 두 번째 인자 : template에 추가할 정보가 담긴 Object


// await is only valid in async function !!
export const home = async function(req, res) 
{
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    console.log(videos);

    res.render("home", { pageTitle: "Home", videos }); 
  } catch(error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos:[] });
  }
};

export const search = async function (req, res) {
    const {
        query : {term: searchingBy}
    } = req;
    let videos = [];
    try {
      videos = await Video.find({
        title : { $regex: searchingBy , $options: "i" }
      });
    } catch (error) {
      console.log(error);
    }
    res.render("search", { pageTitle: "Search", 
                           searchingBy, 
                           videos
                        }
            );
};

export const getUpload = function (req, res) {
  res.render("upload", { pageTitle: "Upload" })
};

export const postUpload = async function (req, res)  {
  const { 
    body : { title, description },
    file : { path }
  } = req;

  const newVideo = await Video.create({
    fileUrl : path,
    title, 
    description
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};


export const videoDetail = async function (req, res) {
  const videoId = req.params.id;
  try {
  const video = await Video.findById(videoId);
  res.render("videoDetail", {pageTitle : video.title, video});
  } catch(error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async function (req, res) {
  const id = req.params.id;
  try {
    const video = await Video.findById(id);
    console.log(video.id);
    res.render("editVideo", {pageTitle : `Edit ${video.title}`, video});
  } catch(error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async function (req, res) {
  const id = req.params.id;
  const {
    body : { title, description }
  } = req;

  try {
    await Video.findOneAndUpdate( id, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch(error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async function (req, res) {
  const id = req.params.id;
  try {
    await Video.findOneAndRemove({_id : id}); 
  } catch(error) {
    console.log(error);
  }
  res.redirect(routes.home);
};