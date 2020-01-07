import routes from "../routes";
import Video from "../models/Video"

// render 첫 번째 인자 : templates
// render 두 번째 인자 : template에 추가할 정보가 담긴 Object


// await is only valid in async function !!
export const home = async function(req, res) 
{
  try {
    const videos = await Video.find({});
    console.log(videos);
    res.render("home", { pageTitle: "Home", videos }); 
  } catch(error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos:[] });
  }
};

export const search = function (req, res) {
    const {
        query : {term: searchingBy}
    } = req;

    res.render("search", { pageTitle : "Search", 
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
  res.render("videoDetail", {pageTitle : "Video Detail", video});
  } catch(error) {
    res.redirect(routes.home);
  }
};
export const editVideo = function (req, res) {
    res.render("editVideo", {pageTitle : "Edit Video"});
};
export const deleteVideo = function (req, res) {
    res.render("deleteVideo", {pageTitle : "Delete Video"});
};