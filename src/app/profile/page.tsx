import Link from 'next/link'

export default function page() {
  return (
    <>
<div>
  <ul>
    <li><Link href="/profileOrders">Orders</Link></li>
    <li><Link href="/wishlist">Wishlist</Link></li>
    <li><Link href="/accountSettings">Settings</Link></li>
  </ul>
</div>
    </>
  )
}
