USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExBondDocumentEntryContainerDetails]    Script Date: 5/25/2024 3:44:46 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnExBondDocumentEntryContainerDetails](
			trnExBondDocumentEntryContainerDetailsID [int] IDENTITY(1,1) NOT NULL,
			trnExBondDocumentEntryDetailsID [int] NULL,
			trnExBondDocumentEntryID [int] NULL,
			trnDocumentContainerID [int] NULL,
			ContainerNo [varchar](255) NULL,
			Size [varchar](255) NULL,
			Type [varchar](255) NULL,
			NoOfPackages [decimal](18, 2) NULL,
			NoOfPieces [decimal](18, 2) NULL,
			NoOfWeight [decimal](18, 2) NULL,
			GuiID [varchar](255) NULL,
			Flagdeleted [bit] NOT NULL,
			IsFinished [bit] NOT NULL,
			Createdby [bigint] NULL,
			CreatedDate [datetime] NOT NULL,
			UpdatedBy [bigint] NULL,
			UpdatedDate [datetime] NULL			
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExBondDocumentEntryContainerDetails] ADD  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[trnExBondDocumentEntryContainerDetails] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExBondDocumentEntryContainerDetails] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


