

import Input from '../../Form/Input'
import Radio from '../../Form/Radio'
import RadioGroup from '../../Form/RadioGroup'
import Select from '../../Form/Select'
import './index.css'
export default function AddressModal(props) {
    const {visible=false,onClose=()=>{}}=props;


    const handleClose = () => {
        onClose();
    }
    const handleConfirm = () => {

    }
    return (
        <div className="address-modal" style={{ display: visible? 'block' : 'none' }}>
            <div className='modal-mask' onWheel={(e) => { e.stopPropagation() }}></div>
            <div className="modal-content">
                <div className="modal-header">新增地址</div>
                <div className="modal-body">

                    <div className="form-card">
                        <div className='form-item-label'>收件人资料</div>
                        <div>
                            <Input label="姓名" placeholder="请输入姓名" />
                            <div style={{ marginTop: '10px' }}></div>
                            <Input label="手机号" placeholder="请输入手机号" />
                        </div>
                        <div><RadioGroup>
                            <Radio label="先生" ></Radio>
                            <Radio label="小姐" ></Radio>
                        </RadioGroup></div>

                        <div>
                            收件地址<span className='required'>*</span>
                        </div>
                        <div className='address-district'>
                            <Select options={[{ name: '北京', value: 'beijing' }, { name: '上海', value: 'shanghai' }, { name: '广州', value: 'guangzhou' }, { name: '深圳', value: 'shenzhen' }]}></Select>
                            <Select options={[{ name: '东城区', value: 'dongchengqu' }, { name: '西城区', value: 'xichengqu' }, { name: '朝阳区', value: 'chaoyangqu' }, { name: '海淀区', value: 'haidianqu' }]}></Select>
                            <Select options={[{ name: '丰台区', value: 'fengtaiqu' }, { name: '石景山区', value: 'shijingshanqu' }, { name: '通州区', value: 'tongzhouqu' }, { name: '顺义区', value: 'shunyiqu' }]}></Select>
                          <div style={{gridColumn: '1 / span 4', marginTop: '10px'}}>  <Input label="详细地址" placeholder="请输入详细地址" /></div>
                        </div>

                    </div>
                </div>
                <div className='modal-footer'>
                    <div className='btn ' onClick={handleClose}>取消</div>
                    <div className='btn btn-primary' onClick={handleConfirm}>新增地址</div>
                </div>
            </div>
        </div>
    )
}