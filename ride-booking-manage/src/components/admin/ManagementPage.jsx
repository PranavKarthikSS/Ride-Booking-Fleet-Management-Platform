import {useMemo,useState} from "react";
import {Plus,Search,Trash2,Pencil} from "lucide-react";
import AdminLayout from "./AdminLayout";
import StatCard from "./StatCard";
import DataTable from "./DataTable";
export default function ManagementPage({title,subtitle,stats,initialRows,fields,columns,searchKeys,filters=[],idPrefix}) {
const [rows,setRows]=useState(initialRows),[query,setQuery]=useState(""),[filter,setFilter]=useState("All"),[modal,setModal]=useState(false),[editing,setEditing]=useState(null),[form,setForm]=useState({});
const shown=useMemo(()=>rows.filter(r=>(!query||searchKeys.some(k=>String(r[k]||"").toLowerCase().includes(query.toLowerCase())))&&(filter==="All"||r.status===filter)),[rows,query,filter,searchKeys]);
const add=()=>{setEditing(null);setForm(Object.fromEntries(fields.map(f=>[f.key,""])));setModal(true)};
const edit=r=>{setEditing(r);setForm({...r});setModal(true)};
const save=e=>{e.preventDefault();if(editing)setRows(a=>a.map(r=>r.id===editing.id?{...r,...form}:r));else setRows(a=>[{...form,id:idPrefix+Date.now().toString().slice(-5)},...a]);setModal(false)};
const del=r=>{if(confirm("Delete this record?"))setRows(a=>a.filter(x=>x.id!==r.id))};
const cols=[...columns,{key:"actions",label:"Actions",render:r=><div className="row-actions"><button className="row-action" onClick={()=>edit(r)} title="Edit"><Pencil size={13}/></button><button className="row-action" onClick={()=>del(r)} title="Delete"><Trash2 size={13}/></button></div>}];
return <AdminLayout title={title} subtitle={subtitle}><div className="page-heading"><div><h2>{title}</h2><p>Search, review and manage records.</p></div><button className="btn btn-primary" onClick={add}><Plus size={15}/> Add New</button></div>
{stats?.length>0&&<div className="stats-grid">{stats.map(s=><StatCard key={s.label}{...s}/>)}</div>}
<section className="panel"><div className="panel-heading"><div><h3>All records</h3><p>{shown.length} records displayed</p></div></div>
<div className="toolbar"><label className="field-control search-control"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search records..."/></label>{filters.length>0&&<select className="field-control" value={filter} onChange={e=>setFilter(e.target.value)}><option>All</option>{filters.map(f=><option key={f}>{f}</option>)}</select>}</div><DataTable columns={cols} rows={shown}/></section>
{modal&&<div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&setModal(false)}><form className="modal" onSubmit={save}><h3>{editing?"Edit record":"Add new record"}</h3><p className="modal-subtitle">Enter the information below.</p><div className="form-grid">{fields.map(f=><div className="form-field" key={f.key}><label>{f.label}</label>{f.options?<select required value={form[f.key]||""} onChange={e=>setForm({...form,[f.key]:e.target.value})}><option value="">Select</option>{f.options.map(o=><option key={o}>{o}</option>)}</select>:<input required type={f.type||"text"} value={form[f.key]||""} onChange={e=>setForm({...form,[f.key]:e.target.value})}/>}</div>)}</div><div className="modal-actions"><button type="button" className="btn btn-light" onClick={()=>setModal(false)}>Cancel</button><button className="btn btn-primary">Save</button></div></form></div>}
</AdminLayout>}