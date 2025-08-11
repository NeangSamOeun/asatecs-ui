import {Component} from '@angular/core';
import {Products} from '../../../core/model/models';


@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  items = [{label: 'Product'}];
  q: string = '';
  activeIndexes: number[] = [0];
  loading: boolean = false;
  sections: any [] = [
    {
      title: 'Electrical Equipment',
      items: [
        {label: 'Switchgear/Protection', key: 'switchgear'},
        {label: 'Power Transformer', key: 'transformer'},
        {label: 'Electrical Cable', key: 'cable'},
        {label: 'Electrical Meter', key: 'meter'},
        {label: 'Electrical Accessories', key: 'accessories'}
      ]
    },
    {title: 'Safety & Tools'},
    {title: 'Automation & Control'},
    {title: 'Building Management'},
    {title: 'System & Solutions'},
    {title: 'Other'}
  ];
  products: Products[] = [
    { id: 1, name: 'Power Transformer', image: 'assets/images/image/cpu.png', spec: '1250kVA, Outdoor', categoryKey: 'transformer'},
    { id: 2, name: 'Auto Recloser 24kV', image: 'assets/images/image/power_t.png', spec: '1250kVA, Outdoor', categoryKey: 'switchgear'},
    { id: 3, name: 'Load Break Switch', image: 'assets/images/image/cpu.png', spec: '1250kVA, Outdoor', categoryKey: 'switchgear'},
    { id: 4, name: 'Ring Main Unit', image: 'assets/images/image/cpu.png', spec: '1250kVA, Outdoor', categoryKey: 'switchgear'},
    { id: 5, name: 'Electrical Cable', image: 'assets/images/image/electrical_cable.png', spec: '1250kVA, Outdoor', categoryKey: 'cable'},
    { id: 6, name: 'Line post Insulator', image: 'assets/images/image/cpu.png', spec: '1250kVA, Outdoor', categoryKey: 'accessories'}
  ];
  constructor() {}

  isOpen(i: number): boolean {
    return Array.isArray(this.activeIndexes) && this.activeIndexes.includes(i);
  }

  clearAll(): void {
    this.q = '';
    this.sections.forEach(s => s.items?.forEach((i: any) => i.checked = false));
  }

  filteredProducts(): Products[] {
    const selectedKeys = new Set(
      this.sections.flatMap((s: any) => s.items?.filter((i: any) => i.checked).map((i: any) => i.key) ?? [])
    );
    return this.products.filter((p: Products) => {
      const matchText: boolean | undefined = this.q
        ? (p.name?.toLowerCase().includes(this.q.toLowerCase()) || p.spec?.toLowerCase().includes(this.q.toLowerCase()))
        : true;
      const matchFilter: boolean = selectedKeys.size ? selectedKeys.has(p.categoryKey) : true;
      return matchText && matchFilter;
    });
  }

}
