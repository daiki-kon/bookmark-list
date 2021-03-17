import React, { FC, useEffect, useState } from 'react';
import { PreviewUrlBox } from '../components/PreviewUrlBox';
import { fetchOgp, FetchOgpResponse } from '../apiClients';

export type PreviewUrlBoxContainerProps = {
  bookmarkURL: string;
}

export const PreviewUrlBoxContainer: FC<PreviewUrlBoxContainerProps> = (props) => {
  const { bookmarkURL } = props;
  const [ogpData, setOgpData] = useState<FetchOgpResponse>({ ogImageURL: '', ogSiteName: '', ogTitle: '' });

  const setFetchOgpResponse = async (url: string) => {
    const response: FetchOgpResponse = await fetchOgp({ url });
    setOgpData(response);
  };

  useEffect(() => {
    setFetchOgpResponse(bookmarkURL);
  }, []);

  return (
    <PreviewUrlBox
      siteUrl={bookmarkURL}
      imageUrl={ogpData?.ogImageURL}
      title={ogpData?.ogTitle}
    />
  );
};
