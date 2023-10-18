import ReIcon from '@/components/reIcon';
import { Link } from 'react-router-dom';
import Signature from '@/components/signature';
export default function SignaturePage() {
  return (
    <>
      <Link to="/components">
        <ReIcon name="ri-arrow-left-line" size={24} color="#333" />
      </Link>
      <h2 className="mb-6 text-lg">Signature</h2>
      <Signature className="rounded-sm overflow-hidden inline-block" width={400} height={220} />
    </>
  );
}
