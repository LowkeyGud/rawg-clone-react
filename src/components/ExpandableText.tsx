import { Button, Text } from '@chakra-ui/react';
import parse from 'html-react-parser';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false)

  if (!children) return null;

  const limit = 300;
  const textLen = children.length;

  if (textLen < limit) return <Text> textAlign={'justify'}{children}</Text>;

  const summary = expanded ? children : children.slice(0, limit) + ' ...';

  return <>
    {parse(summary)}
    <Button marginLeft={2} size='xs' fontStyle='bold' colorScheme='red' onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Show All'}</Button>
  </>

  // return (
  //   <>
  //     <Text textAlign={'justify'}>
  //       <Button marginLeft={2} size='xs' fontStyle='bold' colorScheme='red' onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Show All'}</Button>
  //     </Text>
  //   </>
  // )
}

export default ExpandableText;

