import { Rating, Typography } from "@mui/material";
import { useState } from "react";

const RatingBox = () => {
    const [value, setValue] = useState(2);
    return (<>
        <Typography component="legend">Read only</Typography>
        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue) }} />
    </>
    )
}

export default RatingBox;