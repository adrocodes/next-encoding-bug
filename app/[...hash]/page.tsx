type Props = {
  params: {
    hash: string[];
  };
};

export default function Page({ params }: Props) {
  const joined = params.hash.join('/')
  const debug = {
    joined,
    params,
    decoded: decodeURIComponent(joined),
  };

  return (
    <div>
      <pre>{JSON.stringify(debug, null, 2)}</pre>
    </div>
  );
}
