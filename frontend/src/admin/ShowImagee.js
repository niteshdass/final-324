import React from "react";
import { API } from "../config";

const ShowImagee = ({ item, url }) => (
    <div className="product-img">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-3"
            style={{ maxHeight: "20%", maxWidth: "40%" }}
        />
    </div>
);

export default ShowImagee;