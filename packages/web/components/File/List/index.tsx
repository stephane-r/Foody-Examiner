import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-apollo';
import FILES from '../../../graphql/queries/files';

interface File {
  name: string;
  url: string;
}

const FileList: React.FC = () => {
  // @ts-ignore
  const userId = useSelector(state => state.app.user?.id);

  const { data, loading, error } = useQuery(FILES, {
    variables: { userId }
  });

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <ul>
      {data.files.map(({ name, url }: File) => (
        <li>
          <h2>{name}</h2>
          <img src={url} alt={name} width="150" />
        </li>
      ))}
    </ul>
  );
};

export default FileList;
