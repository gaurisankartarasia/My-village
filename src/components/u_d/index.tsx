import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

const UnderDevelopment: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check if the message has been shown in this session
    const hasSeenMessage = sessionStorage.getItem('hasSeenUnderDevelopmentMessage');
    if (!hasSeenMessage) {
      setIsOpen(true);
      // Mark the message as seen for this session
      sessionStorage.setItem('hasSeenUnderDevelopmentMessage', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Website Under Development</DialogTitle>
          <DialogDescription>
            This website is currently under active development. Some features may be incomplete or subject to change please contact <a target='_blank' className='text-blue-600 hover:underline underline-offset-2 ' href='mailto:gaurisankartarasia@gmail.com' >gaurisankartarasia@gmail.com</a> . Thank you for your patience!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleClose}>Got it</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UnderDevelopment;