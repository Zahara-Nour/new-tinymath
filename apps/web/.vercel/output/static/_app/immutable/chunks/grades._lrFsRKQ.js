const e=(n,c)=>({name:n,father:c}),a="cp",o="ce1",E="ce2",r="cm1",M="cm2",m="6ème",T="5ème",S="4ème",i="3ème",l="2nde",R="1ère spé Maths",p="1ère STMG",I="1ère générale",C="Tale générale",A="Tale STMG",G="Tale spé Maths",h="Maths Complémentaires",_="Maths Expertes",j=[a,o,E,r,M,m,T,S,i,l,R,p,I,C,G,A,h,_],P=e(a,null),g=e(o,P),N=e(E,g),u=e(r,N),L=e(M,u),x=e(m,L),H=e(T,x),f=e(S,H),O=e(i,f),t=e(l,O),d=e(R,t),Q=e(p,t),q=e(I,t),X=e(C,q),b=e(A,Q),U=e(G,d),k=e(h,d),w=e(_,U);function v(n,c){let s={[a]:P,[o]:g,[E]:N,[r]:u,[M]:L,[m]:x,[T]:H,[S]:f,[i]:O,[l]:t,[I]:q,[R]:d,[p]:Q,[C]:X,[G]:U,[A]:b,[h]:k,[_]:w}[c];for(;s&&s.name!==n;)s=s.father;return!!s}export{a as C,R as P,S as Q,m as S,i as T,v as a,o as b,E as c,r as d,M as e,T as f,j as g,l as h,G as i};
