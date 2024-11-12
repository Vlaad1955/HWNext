import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PostLayout metadata'
}
type Props = { children: React.ReactNode }
const PostsLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default PostsLayout;