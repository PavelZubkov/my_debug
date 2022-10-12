namespace $.$$ {

	export class $my_debug extends $.$my_debug {

		@ $mol_mem
		source(next?: string) {
			return this.$.$mol_state_local.value('source', next) ?? super.source()
		}

		@ $mol_mem
		tree() {
			const source = this.source().replace( /\n?$/, '\n' )
			
			const tree = this.$.$mol_view_tree2_normalize(
				this.$.$mol_tree2_from_string( source )
			).kids[0]
			
			return tree
		}

		@ $mol_mem
		code() {

			const tree = this.tree()
			
			const code = this.$.$mol_tree2_text_to_string_mapped_js(
				this.$.$mol_tree2_js_to_text(
					this.$.$mol_view_tree2_to_js(
						tree.list([ tree ])
					)
				)
			)

			return code

		}

		@ $mol_mem
		preview() {
			const View = this.$.$mol_js_eval( `${this.code()}; \n return $my_test` ) as typeof $mol_view
			const view = View.Root(0)
			const node = view.dom_node()
			view.autorun()
			return node
		}

		@ $mol_mem
		css_node() {
			const id = '$my_test'
			const doc = $mol_dom_context.document
			let el = doc.getElementById(id)
			if (!el) {
				el = doc.createElement('style')
				el.id = id
				doc.head.appendChild( el )
			}
			return el
		}

		@ $mol_mem
		css(next?: string) {
			if (next !== undefined) this.css_node().innerHTML = next
			return next ?? super.css()
		}

	}

}
