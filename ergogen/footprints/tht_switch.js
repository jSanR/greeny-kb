module.exports = {
  params: {
    designator: 'RST', // for Button
    side: 'F',
    reversible: false,
    include_silkscreen: true,
    from: { type: 'net', value: 'GND' },
    to: { type: 'net', value: 'RST' },
  },
  body: p => {
    const common_start = `
  (footprint "tht_switch"
    	(layer "${p.side}.Cu")
    	${p.at}
    	(descr "tactile push button, 6x6mm e.g. PHAP33xx series, height=5mm")
    	(property "Reference" "${p.ref}"
    		(at 3.15 -2 ${p.r})
    		(layer "${p.side}.SilkS")
    		${p.ref_hide}
    		(effects (font (size 1 1) (thickness 0.15)))
    	)
    	(attr through_hole)
        `
    const silkscreen_front = `
    	(fp_line (start -0.25 1.5) (end -0.25 3) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
    	(fp_line (start 1 5.5) (end 5.5 5.5)(stroke (width 0.12) (type solid)) (layer "F.SilkS"))
    	(fp_line (start 5.5 -1) (end 1 -1)(stroke (width 0.12) (type solid)) (layer "F.SilkS"))
    	(fp_line (start 6.75 3) (end 6.75 1.5)(stroke (width 0.12) (type solid)) (layer "F.SilkS"))
    	(fp_line (start 0.25 -0.75) (end 3.15 -0.75)(stroke (width 0.1) (type solid)) (layer "F.Fab"))
    	(fp_line (start 0.25 5.25) (end 0.25 -0.75)(stroke (width 0.1) (type solid)) (layer "F.Fab"))
    	(fp_line (start 3.15 -0.75) (end 6.25 -0.75)(stroke (width 0.1) (type solid)) (layer "F.Fab"))
    	(fp_line (start 6.25 -0.75) (end 6.25 5.25)(stroke (width 0.1) (type solid)) (layer "F.Fab"))
    	(fp_line (start 6.25 5.25) (end 0.25 5.25)(stroke (width 0.1) (type solid)) (layer "F.Fab"))
    	(fp_circle (center 3.15 2.25) (end 1.25 2.5)(stroke (width 0.1) (type solid)) (fill no) (layer "F.Fab"))
    	(fp_text user "${p.designator}" (at 3.15 2.25 ${p.r}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
        `
	/*
	Original footprint had this after the last F.SilkS line:
	
	(fp_line (start -1.5 5.75) (end -1.5 6)(stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
	(fp_line (start -1.5 6) (end -1.25 6)(stroke (width 0.05) (type solid)) (layer "F.CrtYd" ))
	(fp_line (start -1.25 -1.5) (end 7.75 -1.5)(stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
	(fp_line (start 7.75 -1.5) (end 8 -1.5)(stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
	(fp_line (start 7.75 6) (end -1.25 6)(stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
	(fp_line (start 7.75 6) (end 8 6)(stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
	(fp_line (start 8 -1.5) (end 8 -1.25)(stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
	(fp_line (start 8 -1.25) (end 8 5.75)(stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
	(fp_line (start 8 6) (end 8 5.75)(stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
	*/
    
    const silkscreen_back = `
    	(fp_line (start -0.25 1.5) (end -0.25 3) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    	(fp_line (start 1 5.5) (end 5.5 5.5)(stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    	(fp_line (start 5.5 -1) (end 1 -1)(stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    	(fp_line (start 6.75 3) (end 6.75 1.5)(stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    	(fp_line (start 0.25 -0.75) (end 3.15 -0.75)(stroke (width 0.1) (type solid)) (layer "B.Fab"))
    	(fp_line (start 0.25 5.25) (end 0.25 -0.75)(stroke (width 0.1) (type solid)) (layer "B.Fab"))
    	(fp_line (start 3.15 -0.75) (end 6.25 -0.75)(stroke (width 0.1) (type solid)) (layer "B.Fab"))
    	(fp_line (start 6.25 -0.75) (end 6.25 5.25)(stroke (width 0.1) (type solid)) (layer "B.Fab"))
    	(fp_line (start 6.25 5.25) (end 0.25 5.25)(stroke (width 0.1) (type solid)) (layer "B.Fab"))
    	(fp_circle (center 3.15 2.25) (end 1.25 2.5)(stroke (width 0.1) (type solid)) (fill no) (layer "B.Fab"))
    	(fp_text user "RST" (at 3.15 2.25 ${p.r}) (layer "B.Fab") (effects (font (size 1 1) (thickness 0.15))))
        `
    const common_end = `
  		(pad "1" thru_hole circle (at 0 0 ${90 + p.r}) (size 2 2) (drill 1.1) (layers  "*.Cu" "*.Mask") ${p.to.str})
    	(pad "1" thru_hole circle (at 6.5 0 ${90 + p.r}) (size 2 2) (drill 1.1) (layers  "*.Cu" "*.Mask") ${p.to.str})
    	(pad "2" thru_hole circle (at 0 4.5 ${90 + p.r}) (size 2 2) (drill 1.1) (layers  "*.Cu" "*.Mask") ${p.from.str})
    	(pad "2" thru_hole circle (at 6.3 4.5 ${90 + p.r}) (size 2 2) (drill 1.1) (layers  "*.Cu" "*.Mask") ${p.from.str})
  )
        `
        
    let final = common_start;
    if (p.side == "F" || p.reversible) {
      if (p.include_silkscreen) {
        final += silkscreen_front
      }
    }
    if (p.side == "B" || p.reversible) {
      if (p.include_silkscreen) {
        final += silkscreen_back
      }
    }
    final += common_end;
    return final;
  }
}
