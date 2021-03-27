import React, { FC, useEffect, useState } from 'react';
import { PreviewUrlBox } from '../components/PreviewUrlBox';
import { fetchOgp, FetchOgpResponse } from '../apiClients';

export type PreviewUrlBoxContainerProps = {
  bookmarkURL: string;
}

export const PreviewUrlBoxContainer: FC<PreviewUrlBoxContainerProps> = (props) => {
  const { bookmarkURL } = props;
  const [ogpData, setOgpData] = useState<FetchOgpResponse>({ ogImageURL: '', ogSiteName: '', ogTitle: '' });
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const setFetchOgpResponse = async (url: string) => {
    setIsFetching(true);
    const response: FetchOgpResponse = await fetchOgp({ url });
    setOgpData(response);
    setIsFetching(false);
  };

  useEffect(() => {
    setFetchOgpResponse(bookmarkURL);
  }, []);

  return (
    <PreviewUrlBox
      siteUrl={bookmarkURL}
      imageUrl={ogpData?.ogImageURL}
      title={ogpData?.ogTitle}
      isFetching={isFetching}
    />
  );
};
