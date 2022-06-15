import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from '../../../hooks';
import markPostSlice, { setState } from './markPostSlice';
import { MarkPost } from './ui/MarkPost';

type PostMarkDismarkProps = {
  id: number | string;
};

export const PostMarkDismark: React.FC<PostMarkDismarkProps> = ({ id }) => {
  const { state } = useAppSelector(
    (state) => state.markPost[id] ?? {state: 'markOf' }
  );
  const dispatch = useAppDispatch();
  const onMarkClick = () => {
    if (state !== 'markOn') {
      dispatch(setState({ id, state: 'markOn' }));
    } else {
      dispatch(setState({ id, state: 'markOf' }));
    }
  };

  return (
<MarkPost
onMarkClick={() => onMarkClick}
currentState={state}
></MarkPost>
  );
};


