import React from "react";

export default ({id}) => (
    <div>
        <Link to={`/${id}`}>{id}</Link>
    </div>
);
