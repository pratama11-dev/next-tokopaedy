import { useRouter } from 'next/router';
import Layout from '../../components/Layout'

export default function ProductScreen() {
  const { query } = useRouter ();
  const { slug } = query;

  return (
    <Layout>

    </Layout>
  )
}
