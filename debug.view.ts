namespace $.$$ {

	export class $my_debug extends $.$my_debug {

		@ $mol_mem
		rows() {
			return $mol_range2( index => index, () => this.items_count() ).map((index) => this.Item(index))
		}

		@ $mol_mem_key
		label(index: number) {
			return super.label(index).replace('{index}', `${index + 1}`)
		}

	}

}
