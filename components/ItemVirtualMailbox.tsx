'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface FinalDocsAttachmentsData{
  id: number;
  final_document_id: string;
  attachment_url: string;
  created_at: string;
}

const ItemVirtualMailbox = ({id}: {id: string}) => {
  const [getAttachments, setAttachments] = useState<FinalDocsAttachmentsData[]>();

  useEffect(() => {
      (async function(){
          const { data } = await axios.get(`/api/mysql/virtual-mailbox/${id}`);
          console.log("single final doc data is>> ", data);
          setAttachments(data.data);
      })();
  }, [id])
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {
        getAttachments?.map((singleFinalDocAttachment:FinalDocsAttachmentsData ) => (
          <div className=' w-100' key={singleFinalDocAttachment.id}>
            <iframe
              src={singleFinalDocAttachment.attachment_url}
              className="w-full h-[80vh] border-2 border-gray-300 rounded-lg"
              title={`Attachment`}
              style={{ minHeight: '250px' }}
            />
          </div>
        ))
      }
    </div>
  )
}

export default ItemVirtualMailbox
