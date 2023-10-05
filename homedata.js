import { Grid, Box } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Comment from "./Comment";

const POSTS = [
  {
    dp: "https://www.momjunction.com/wp-content/uploads/2015/04/Top-188-Latest-And-Modern-Hindu-Baby-Girl-Names1-910x1024.jpg",
    title1: "Naga Durga",
    image1:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667",
    content:
      "Nature can refer to the general realm of living plants and animals",
    liked: false,
  },
  {
    dp: "https://static.toiimg.com/photo/88239805.cms",
    title1: "Tulasi",
    image1:
      "https://images.unsplash.com/photo-1630304565761-d6f8d5a0facd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    content: "cute baby",
    liked: false,
  },
  {
    dp: "https://m.media-amazon.com/images/M/MV5BMmNkNGIyMjEtZDJkNy00ZTBkLTg3MWUtMDBjM2ZmZGMyYTVlXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_FMjpg_UX1000_.jpg",
    title1: "Ganesh",
    image1:
      "https://static.toiimg.com/thumb/msid-87470911,width-1280,resizemode-4/87470911.jpg",
    content: "Power Star Pawan kalyan",
    liked: false,
  },
  {
    dp: "https://swarajya.gumlet.io/swarajya%2F2023-07%2F5e103227-59ba-4e17-ab02-c0f956b8568d%2Fpawan_kalyan_rsz.png?q=75&auto=format%2Ccompress&w=400&dpr=2.6",
    title1: "Siva",
    image1:
      "https://swarajya.gumlet.io/swarajya%2F2023-07%2F5e103227-59ba-4e17-ab02-c0f956b8568d%2Fpawan_kalyan_rsz.png?q=75&auto=format%2Ccompress&w=400&dpr=2.6",
    content: "Power Star Pawan kalyan",
    liked: false,
  },
];
export default function Homedata() {
  const [posts, setPosts] = useState(POSTS);
  const likeHandler = (event, index) => {
    const updatedPost = posts[index];
    updatedPost.liked = !updatedPost.liked;
    const updatedPosts = [
      ...posts.slice(0, index),
      updatedPost,
      ...posts.slice(index + 1),
    ];
    setPosts(updatedPosts);
  };
  return (
    <Grid style={{ borderLeft: "1px solid grey" }}>
      <Grid style={{ paddingLeft: 100, paddingRight: 100 }}>
        {posts.map(({ dp, title1, image1, content, liked }, i) => (
          <Card sx={{ maxWidth: 500, marginTop: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <img style={{ width: 40, borderRadius: 50 }} src={dp} />
                </Avatar>
              }
              title={title1}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />

            <CardMedia
              component="img"
              height="400"
              width="500"
              image={image1}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <FavoriteIcon
                  color={liked ? "error" : "inherit"}
                  onClick={(e) => likeHandler(e, i)}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ChatBubbleOutlineIcon />
              </IconButton>
              <IconButton aria-label="share" style={{ paddingLeft: 340 }}>
                <TurnedInNotIcon />
              </IconButton>
            </CardActions>
            <Comment />
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
