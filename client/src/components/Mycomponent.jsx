import { Button } from '@nextui-org/react';
import { usePDF } from 'react-to-pdf';

const Component = () => {
   const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
   return (
      <div>
         <Button onClick={() => toPDF()}>Download PDF</Button>
         <div ref={targetRef}>
            Content to be generated to PDF
         </div>
      </div>
   )
}
export default Component

