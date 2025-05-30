import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#032541",
          paddingTop: { xs: 2, sm: 10 },
          paddingBottom: { xs: 2, sm: 10 },
        }}
        display={"flex"}
        justifyContent={{ xs: "start", sm: "center" }}
        alignContent={"center"}
      >
        <Box>
          <Grid
            container
            spacing={{ xs: 3, sm: 5 }}
            color={"white"}
            className="font-medium text-md"
            direction={{ xs: "column", sm: "row" }}
          >
            <Grid item>
              <Box width={{ xs: "150px", sm: "200px" }}>
                <Link to={"/"}>
                  <img
                    style={{ maxWidth: "100%", height: "auto" }}
                    src="data:image/jpeg;base64,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TUIiIAiIgC+Eby+ogOw4Z0q2ppmSXBkYAyQb4eBYnkO0cqlSuLaK0nPTSbrA7VdazgRdrh3rhvj1q7UnVAhI+ugkY7f3Ite31kFcU6Gn7vIxnB9C4lYFVk47ou9m8xvzrE46ou9m8xvzooS7GTrl2LOViVWTjmj72fzG/MsTjmj72fzG/MtVCXYydc+xZisSq0ccUfez+Y35licbUfez+Y35ldJmbqn2ZZCvhVbONaTvZ/Mb8y8Z8bQAfVxSvdva2q0c5uT6lojPwLH+Vk/pGsZDE6Z57Fg2b7jvNHGSuTyyue50ju2e4udyk3PrK3tL6YnqXB0pAa3tGNya3j4zxn1KOUtnocNR4SeebLtgP7CTyj+W1R+J9GVD6syRwyPaWsALRlk0XWGGtOQ08b2SiUl8usNRoItqtG+eJTBxjS95P5jfnWvuuOGzikrq75TjHJBaPwtUyOG7DcY753ILyOAAbOdW7SVZHTQF+QDG6sTeE2sxo/vYFC1OMmW+qhe48MpDR0C5VY0hpCad+vK65HagZNaOAD+yp1RgvdJ8C/iZJ27RXQ1CScybk5k8J4VdME9zv8od+7jVLViw7puGnidHIJC4zF/1bQRYtYN88RUUSUZbm3tGudlWIrLz9zUxFRymrleIJXglli2J5B+rYMiBxKVwjTVDS8yNkZEWgNZKCOzvtDDsFr8twtnrtpvBzeYz514TYtjt2EMhO9ulmj1ElbxVUZ69RwSnxVtKo8PbCXXp13wka2NANeI/5ix9+QFup7XqtL3rauSWQyyG7jllsA3mgcC8FzWT1zcketwtTppjB8192wiIqG4REQBERAEREAREQBERQAiIgCIiAIiIAiIpAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/9k="
                    alt=""
                  />
                </Link>
              </Box>
            </Grid>
            <Grid item>
              <ul className="pl-4">
                <li className="text-xl font-bold">THE BASICS</li>
                <li>About TMDB</li>
                <li>Contact Us</li>
                <li>Support Forums</li>
                <li>API</li>
                <li>System Status</li>
              </ul>
            </Grid>
            <Grid item>
              <ul className="pl-4">
                <li className="text-xl font-bold">GET INVOLVED</li>
                <li>About TMDB</li>
                <li>Contact Us</li>
                <li>Support Forums</li>
              </ul>
            </Grid>
            <Grid item>
              <ul className="pl-4">
                <li className="text-xl font-bold">COMMUNITY</li>
                <li>Guidelines</li>
                <li>Discussions</li>
                <li>Leaderboard</li>
              </ul>
            </Grid>
            <Grid item>
              <ul className="pl-4">
                <li className="text-xl font-bold">LEGAL</li>
                <li>Terms of Use</li>
                <li>API Terms of Use</li>
                <li>Privacy Policy</li>
                <li>DMCA Policy</li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Typography
        component={"p"}
        textAlign={"center"}
        padding={1}
        fontSize={20}
        fontWeight={"bold"}
        fontFamily={"cursive"}
      >
        Developed By Mohit Kumar
      </Typography>
    </>
  );
}

export default Footer;
