export class Products {
  id?: number;
  name?: string;
  image?: string;   // path to image
  spec?: string;    // e.g., "1250kVA, Outdoor"
  categoryKey?: string; // matches FilterItem.key;
}
